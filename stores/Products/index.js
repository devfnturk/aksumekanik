import { getBrandActivityAreaByFieldOfActivity, getProductDetail, getProductsByBrandActivityArea, getProductsByBrandId } from "@/services/getMethods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    productsByBrandActivityArea: [],
    productsByBrandId: [],
    fieldOfActivities: null,
    productDetail: null,
    loading: false,
    error: null,
}

export const fetchGetProductsByBrandActivityArea = createAsyncThunk('products/fetchGetProductsByBrandActivityArea', async (brandActivityAreaId) => {
    const response = await getProductsByBrandActivityArea(brandActivityAreaId);
    return response;
});

export const fetchGetProductsByBrandId = createAsyncThunk('products/fetchGetProductsByBrandId', async (brandId) => {
    const response = await getProductsByBrandId(brandId);
    return response;
});

export const fetchGetProductDetail = createAsyncThunk('products/fetchGetProductDetail', async (productId) => {
    const response = await getProductDetail(productId);
    return response;
});

export const fetchGetBrandActivityAreaByFieldOfActivity = createAsyncThunk('products/fetchGetBrandActivityAreaByFieldOfActivity', async (fieldOfActivityId) => {
    const response = await getBrandActivityAreaByFieldOfActivity(fieldOfActivityId);
    return response;
});

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetProductsByBrandActivityArea.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetProductsByBrandActivityArea.fulfilled, (state, action) => {
                state.loading = false;
                state.productsByBrandActivityArea = action.payload;
            })
            .addCase(fetchGetProductsByBrandActivityArea.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            })
            .addCase(fetchGetProductsByBrandId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetProductsByBrandId.fulfilled, (state, action) => {
                state.loading = false;
                state.productsByBrandId = action.payload;
            })
            .addCase(fetchGetProductsByBrandId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            })
            .addCase(fetchGetProductDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetProductDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.productDetail = action.payload;
            })
            .addCase(fetchGetProductDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            })
            .addCase(fetchGetBrandActivityAreaByFieldOfActivity.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetBrandActivityAreaByFieldOfActivity.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.fieldOfActivities = action.payload;
            })
            .addCase(fetchGetBrandActivityAreaByFieldOfActivity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Bir hata oluştu';
            });
    },
});

export default productsSlice.reducer;