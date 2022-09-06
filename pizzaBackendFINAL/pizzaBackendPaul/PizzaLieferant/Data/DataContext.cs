using Microsoft.EntityFrameworkCore;

namespace PizzaLieferant.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Pizza> Pizzas { get; set; }
        public DbSet<OrderData> OrderDatas { get; set; } 
        public DbSet<BridgePizzaZuOrderData> BridgePizzaZuOrderDatas { get; set; }


    }
}
