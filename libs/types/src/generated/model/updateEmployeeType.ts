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
import { EmergencyContactType } from './emergencyContactType';


export interface UpdateEmployeeType { 
    id?: any | null;
    plannable: boolean;
    news_visibility: UpdateEmployeeType.NewsVisibilityEnum;
    agenda_visibility: UpdateEmployeeType.AgendaVisibilityEnum;
    icon: string;
    email: string;
    roles: Array<string>;
    first_name: string;
    last_name: string;
    corporate_email?: string;
    infix?: string;
    title?: string;
    street?: string;
    number?: number;
    addition?: string;
    postal_code?: string;
    city?: string;
    phone_number?: string;
    private_number?: string;
    leave_balance: number;
    branch: string;
    date_of_birth?: string;
    date_of_employment?: string;
    marital_status: UpdateEmployeeType.MaritalStatusEnum;
    number_of_children: number;
    baptismal_name?: string;
    private_email?: string;
    partner_name?: string;
    partner_date_of_birth?: string;
    emergency_contacts: Array<EmergencyContactType>;
    active: boolean;
    mark_as_clean: boolean;
    external_reference?: string;
    loket_employer_id?: string;
    loket_employee_id?: string;
    loket_employment_id?: string;
    manager_id?: string;
    contract_type?: UpdateEmployeeType.ContractTypeEnum;
    initials?: string;
    place_of_birth?: string;
    contract_end_date?: string;
}
export namespace UpdateEmployeeType {
    export type NewsVisibilityEnum = 'all' | 'branch_only' | 'none';
    export const NewsVisibilityEnum = {
        All: 'all' as NewsVisibilityEnum,
        BranchOnly: 'branch_only' as NewsVisibilityEnum,
        None: 'none' as NewsVisibilityEnum
    };
    export type AgendaVisibilityEnum = 'all' | 'branch_only' | 'none';
    export const AgendaVisibilityEnum = {
        All: 'all' as AgendaVisibilityEnum,
        BranchOnly: 'branch_only' as AgendaVisibilityEnum,
        None: 'none' as AgendaVisibilityEnum
    };
    export type MaritalStatusEnum = 'not_married' | 'married' | 'cohabitating' | 'civil_unionship' | 'unknown';
    export const MaritalStatusEnum = {
        NotMarried: 'not_married' as MaritalStatusEnum,
        Married: 'married' as MaritalStatusEnum,
        Cohabitating: 'cohabitating' as MaritalStatusEnum,
        CivilUnionship: 'civil_unionship' as MaritalStatusEnum,
        Unknown: 'unknown' as MaritalStatusEnum
    };
    export type ContractTypeEnum = 'permanent' | 'temporary' | 'loan' | 'other';
    export const ContractTypeEnum = {
        Permanent: 'permanent' as ContractTypeEnum,
        Temporary: 'temporary' as ContractTypeEnum,
        Loan: 'loan' as ContractTypeEnum,
        Other: 'other' as ContractTypeEnum
    };
}

