import {EntryController} from "./controller/EntryController";

export const Routes = [
    {
        method: "get",
        route: "/entries",
        controller: EntryController,
        action: "all"
    },
    {
        method: "get",
        route: "/entries/receivings",
        controller: EntryController,
        action: "receivings"
    },
    {
        method: "get",
        route: "/entries/payments",
        controller: EntryController,
        action: "payments"
    },
    {
        method: "get",
        route: "/entries/:id",
        controller: EntryController,
        action: "one"
    }, 
    {
        method: "post",
        route: "/entries",
        controller: EntryController,
        action: "save"
    }, 
    {
        method: "delete",
        route: "/entries/:id",
        controller: EntryController,
        action: "remove"
    }
];