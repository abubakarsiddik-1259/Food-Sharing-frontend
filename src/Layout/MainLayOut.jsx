import React from 'react';
import Navebar from '../Component/Route page/Navebar';
import MyContainer from '../Component/MyContainer';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div>
            <MyContainer>
                 <div className="flex flex-col min-h-screen ">
                    <Navebar></Navebar>

                <div className="flex-1   max-w-screen-xl">
                  <Outlet>
                    
                 </Outlet>

                </div>
                  
                 </div>
                 
            </MyContainer>
        </div>
    );
};

export default MainLayOut;