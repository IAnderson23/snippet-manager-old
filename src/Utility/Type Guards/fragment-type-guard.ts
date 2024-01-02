import {Fragment} from "../../Database/database-types";

export function isFragment(obj: any): obj is Fragment {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'snippetID' in obj &&
        'name' in obj &&
        'code' in obj &&
        'language' in obj &&
        'order' in obj
    );
}