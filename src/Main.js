const rout=createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"Profile",
        element:<Profile/>
      },
      {
        path:"ContactUs",
        element:<Contact/>
      },
      
      {
        path:"Github",
        element:<Github/>
      },
      
    ]
  }
    
  ]
  )