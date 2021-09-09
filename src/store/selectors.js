import {createSelector} from "reselect";
import {OPERATIONS_COUNT} from "../const";

const getOperations = (state) => state.operations;

export const getVisibleOperations = createSelector(
    getOperations,
    (operations) => operations.slice(Math.max(operations.length - OPERATIONS_COUNT, 0))
);
