namespace PizzaLieferant
{
    public class OrderData
    {
        public int Id { get; set; }
        public string Vorname { get; set; } = string.Empty;
        public string Nachname { get; set; } = string.Empty;
        public string Strasse { get; set; } = string.Empty;
        public string Hausnummer { get; set; } = string.Empty;
        public string Stadt { get; set; } = string.Empty;
        public string PLZ { get; set; } = string.Empty;
        public bool Fertig { get; set; } = false;
        public double Preis { get; set; }
    }
}
