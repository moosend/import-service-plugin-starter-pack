/*
 Example response

 {
     "MemberData": [
         {
             "Values": [
                 "email 0",
                 "name 0"
            ]
         },
         {
             "Values": [
                 "email 1",
                 "name 1"
             ]
         },
         {
             "Values": [
                 "email 2",
                 "name 2"
             ]
         },
         {
             "Values": [
                 "email 3",
                 "name 3"
             ]
         },
         {
             "Values": [
                 "email 4",
                 "name 4"
             ]
         }
     ]
 }
 */

/**
 * type needed for when memberdata request comes in
 */
export interface MemberDataRequest {
    AuthString?: string,
    Filters?: Array<Filter>,
    Page: number,
    PageSize :number,
    BlobUri?: string
}


export interface Filter {
    Key: string,
    Values: Array<string>
}

/**
 * type needed for memberdata response
 */
export interface MemberDataResult {
    MemberData: Array<MemberData>
}

export interface MemberData {
    Values: Array<string>
}

