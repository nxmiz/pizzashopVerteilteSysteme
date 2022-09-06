using System.ComponentModel.DataAnnotations;

namespace PizzaLieferant
{
    public class Pizza
    { 
        public int Id { get; set; }
        public string PizzaName { get; set; } = string.Empty;
        public double PizzaPreis { get; set; }
        public string PizzaBeschreibung { get; set; } = string.Empty;
    }
}
