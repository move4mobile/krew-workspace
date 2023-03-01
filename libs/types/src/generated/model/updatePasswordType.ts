/**
 * Nutt Backend
 * View in [ReDoc](/redoc) or [Swagger UI](/doc).  # Changelog  ### 2021-08-30 - ``Changed`` - Worklog list/export now accept lists of employee ids/project ids/titles/branches instead of singular ones ### 2021-08-31 - ``Changed`` - Compensation request list/export now accept lists of employee ids/branches. Export now allows filtering on status ### 2021-09-24 - ``Removed`` - Removed old personnel handbook endpoints, use the new file endpoints instead. ### 2021-10-29 - ``Added`` - Endpoint for batch creation of worklog locks ### 2021-12-06 - ``Updated`` - The update order endpoint now requires the order\'s items to be passed in the request body, including the new `amount_ready` field. The order lines from the request will replace the order\'s current lines. ### 2022-05-24 - ``Updated`` - Revamped the user-facing password reset flow to use a temporary reset token instead of immediately changing a user\'s password ### 2022-11-04 - ``BC BREAK`` - Updated the createEmployee/updateEmployee/changeOwnData endpoints with four new fields, three of which are mandatory! New fields are contract_type, initials, place_of_birth and contract_end_date (optional). 
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface UpdatePasswordType { 
    id?: any | null;
    password: string;
}

