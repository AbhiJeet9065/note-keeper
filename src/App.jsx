import React from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import HeaderBar from "./Header/HeaderBar";
import DataProvider from "./context/DataProvider";

const App = () => {

    return <>
        <DataProvider>
            <HeaderBar />
            <CreateNote />
            <Footer />
        </DataProvider>
    </>
};

export default App;