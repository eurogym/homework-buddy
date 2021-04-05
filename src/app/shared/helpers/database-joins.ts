//Source: https://github.com/AngularFirebase/133-firestore-joins-custom-rx-operators
// See documentation in README.md file there.

import { AngularFirestore } from '@angular/fire/firestore';
import { combineLatest, pipe, of, defer, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

export const leftJoin = (
  afs: AngularFirestore,
  field: string,
  collection: string,
  limit = 100
) => {
  return (source: Observable<any>) =>
    defer(() => {
      // Operator state
      let collectionData: any;

      // Track total num of joined doc reads
      let totalJoins = 0;

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;

          // Save the parent data state
          collectionData = data as any[];

          const reads$ = [];
          for (const doc of collectionData) {
            // Push doc read to Array

            if (doc[field]) {
              // Perform query on join key, with optional limit
              const q = (ref: any) => ref.where(field, '==', doc[field]).limit(limit);

              reads$.push(afs.collection(collection, q).valueChanges());
            } else {
              reads$.push(of([]));
            }
          }

          return combineLatest(reads$);
        }),
        map((joins: any) => {
          return collectionData.map((v: any, i:any) => {
            totalJoins += joins[i].length;
            return { ...v, [collection]: joins[i] || null };
          });
        }),
        tap(final => {
          console.log(
            `Queried ${(final as any).length}, Joined ${totalJoins} docs`
          );
          totalJoins = 0;
        })
      );
    });
};

export const leftJoinDocument = (afs: AngularFirestore, field: string, collection: string, fieldToFill: string) => {
  return (source: Observable<any>) =>
    defer(() => {
      // Operator state
      let collectionData: any;
      const cache = new Map();

      return source.pipe(
        switchMap(data => {
          // Clear mapping on each emitted val ;
          cache.clear();

          // Save the parent data state
          collectionData = data as any[];

          const reads$ = [];
          let i = 0;
          for (const doc of collectionData) {
            // Skip if doc field does not exist or is already in cache
            if (!doc[field] || cache.get(doc[field])) {
              continue;
            }

            // Push doc read to Array
            reads$.push(
              afs
                .collection(collection)
                .doc(doc[field])
                .valueChanges()
            );
            cache.set(doc[field], i);
            i++;
          }

          return reads$.length ? combineLatest(reads$) : of([]);
        }),
        map(joins => {
          return collectionData.map((v: any, i: any) => {
            const joinIdx = cache.get(v[field]);
            return { ...v, [fieldToFill]: joins[joinIdx] || null };
          });
        }),
        tap(final =>
          console.log(
            `Queried ${(final as any).length}, Joined ${cache.size} docs`
          )
        )
      );
    });
};

export const docJoin = (
    afs: AngularFirestore,
    paths: { [key: string]: string }
  ) => {
    return (source: Observable<any>) =>
      defer(() => {
        let parent: any;
        const keys = Object.keys(paths);
  
        return source.pipe(
          switchMap(data => {
            // Save the parent data state
            parent = data;
  
            // Map each path to an Observable
            const docs$ = keys.map(k => {
              const fullPath = `${paths[k]}/${parent[k]}`;
              return afs.doc(fullPath).valueChanges();
            });
  
            // return combineLatest, it waits for all reads to finish
            return combineLatest(docs$);
          }),
          map(arr => {
            // We now have all the associated douments
            // Reduce them to a single object based on the parent's keys
            const joins = keys.reduce((acc, cur, idx) => {
              return { ...acc, [cur]: arr[idx] };
            }, {});
  
            // Return the parent doc with the joined objects
            return { ...parent, ...joins };
          })
        );
      });
  };
