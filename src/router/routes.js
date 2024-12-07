import DetailPage from "../pages/DetailPage/DetailPage";
import MainPage from "../pages/MainPage/MainPage";
import { DETAIL_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "./consts";

export const routes =[
    {
        path:MAIN_PAGE_ROUTE,
        Component: MainPage, 
    },
    {
        path: DETAIL_PAGE_ROUTE + "/:id",
        Component: DetailPage,
    },
]
