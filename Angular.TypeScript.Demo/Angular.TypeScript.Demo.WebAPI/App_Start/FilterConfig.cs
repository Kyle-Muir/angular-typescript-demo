﻿using System.Web;
using System.Web.Mvc;

namespace Angular.TypeScript.Demo.WebAPI
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
