import {createAsyncThunk} from "@reduxjs/toolkit";
import * as itemsService from "../services/itemsService.js";

export const findItemsThunk = createAsyncThunk(
    'details/getItems', async() => {
        const items = await itemsService.getItems();
        return items;
    }
)

export const createItemThunk = createAsyncThunk(
    'details/createItem', async(item) => {
        const newItem = await itemsService.createItem(item);
        return newItem;
    }
)

export const updateItemThunk = createAsyncThunk(
    'details/updateItem', async(iid, item) => {
        const newItem = await itemsService.updateItem(iid, item);
        return newItem;
    }
)

export const deleteItemThunk = createAsyncThunk(
    'details/deleteItem', async(iid) => {
        await itemsService.deleteItem(iid);
        return iid;
    }
)

