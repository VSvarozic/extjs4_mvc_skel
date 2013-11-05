using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace RestFullPrj.Models
{
    [DataContract(Name = "Menu", Namespace = "")]
    public class Menu
    {
        [DataMember(Name = "MenuItems")]
        public List<MenuItem> Items { get; set; }
        [DataMember(Name = "TotalItems")]
        public int TotalItems 
        { 
            get
            {
                return Items.Count();
            }
        }
    }

    [DataContract(Name = "MenuItem", Namespace = "")]
    public class MenuItem
    {
        [DataMember(EmitDefaultValue = false)]
        public string Text { get; set; }
        [DataMember(EmitDefaultValue = false)]
        public string Controller { get; set; }
        [DataMember(EmitDefaultValue = false)]
        public string Action { get; set; }
        [DataMember(EmitDefaultValue = false)]
        public string Target { get; set; }
        [DataMember(Name = "MenuItems", EmitDefaultValue = false)]
        public List<MenuItem> Items { get; set; }
    }
}