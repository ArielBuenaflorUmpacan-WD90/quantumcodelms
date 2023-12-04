import create from "zustand";
import {persist} from "zustand/middleware";

let Apps = (set) => ({
    dopen: true,
    rows: [],
    setRows: (rows) => set((state) => ({ rows: rows})),
    updateOpen: (dopen) => set((state) => ({dopen:dopen})),
});

Apps = persist (Apps, {name: "my_apps"});

export const useAppStore = create(Apps);