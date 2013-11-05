using RestFullPrj.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestFullPrj.Controllers.api
{
    public class RestApiController : ApiController
    {
        public Menu Get()
        {
            var menu = new Menu();
            menu.Items = new List<MenuItem>
            {
                new MenuItem {
                    Text = "Главная",
                    Controller = "Dashboard",
                    Action = "Index",
                    Target = "_self"
                },
                new MenuItem {
                    Text = "Документы",
                    Items = new List<MenuItem> {
                        new MenuItem {
                            Text = "Список",
                            Controller = "Documents",
                            Action = "Index",
                            Target = "_self"
                        },
                        new MenuItem {
                            Text = "Создать документ",
                            Controller = "Documents",
                            Action = "Create",
                            Target = "_self"
                        },
                        new MenuItem {
                            Text = "Что-то еще",
                            Controller = "Documents",
                            Action = "Smth",
                            Target = "_self"
                        }
                    }
                }
            };

            return menu;
        }
    }
}
