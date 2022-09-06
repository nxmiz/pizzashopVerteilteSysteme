using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaLieferant;
using PizzaLieferant.Data;

namespace PizzaLieferant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BridgePizzaZuOrderDatasController : ControllerBase
    {
        private readonly DataContext _context;

        public BridgePizzaZuOrderDatasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/BridgePizzaZuOrderDatas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BridgePizzaZuOrderData>>> GetBridgePizzaZuOrderDatas()
        {
          if (_context.BridgePizzaZuOrderDatas == null)
          {
              return NotFound();
          }
            return await _context.BridgePizzaZuOrderDatas.ToListAsync();
        }

        // GET: api/BridgePizzaZuOrderDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BridgePizzaZuOrderData>> GetBridgePizzaZuOrderData(int id)
        {
          if (_context.BridgePizzaZuOrderDatas == null)
          {
              return NotFound();
          }
            var bridgePizzaZuOrderData = await _context.BridgePizzaZuOrderDatas.FindAsync(id);

            if (bridgePizzaZuOrderData == null)
            {
                return NotFound();
            }

            return bridgePizzaZuOrderData;
        }

        // PUT: api/BridgePizzaZuOrderDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBridgePizzaZuOrderData(int id, BridgePizzaZuOrderData bridgePizzaZuOrderData)
        {
            if (id != bridgePizzaZuOrderData.Id)
            {
                return BadRequest();
            }

            _context.Entry(bridgePizzaZuOrderData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BridgePizzaZuOrderDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BridgePizzaZuOrderDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BridgePizzaZuOrderData>> PostBridgePizzaZuOrderData(BridgePizzaZuOrderData bridgePizzaZuOrderData)
        {
          if (_context.BridgePizzaZuOrderDatas == null)
          {
              return Problem("Entity set 'DataContext.BridgePizzaZuOrderDatas'  is null.");
          }
            _context.BridgePizzaZuOrderDatas.Add(bridgePizzaZuOrderData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBridgePizzaZuOrderData", new { id = bridgePizzaZuOrderData.Id }, bridgePizzaZuOrderData);
        }

        // DELETE: api/BridgePizzaZuOrderDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBridgePizzaZuOrderData(int id)
        {
            if (_context.BridgePizzaZuOrderDatas == null)
            {
                return NotFound();
            }
            var bridgePizzaZuOrderData = await _context.BridgePizzaZuOrderDatas.FindAsync(id);
            if (bridgePizzaZuOrderData == null)
            {
                return NotFound();
            }

            _context.BridgePizzaZuOrderDatas.Remove(bridgePizzaZuOrderData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BridgePizzaZuOrderDataExists(int id)
        {
            return (_context.BridgePizzaZuOrderDatas?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
