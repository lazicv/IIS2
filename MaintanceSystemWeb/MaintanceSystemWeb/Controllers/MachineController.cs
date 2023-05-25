using MaintanceSystemWeb.DTO;
using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Service.Core;
using Microsoft.AspNetCore.Mvc;

namespace MaintanceSystemWeb.Controllers
{
    [Route("api/machine")]
    [ApiController]
    public class MachineController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IMachineService _machineService;

        public MachineController(IConfiguration configuration, IMachineService machineService)
        {
            _configuration = configuration;
            _machineService = machineService;
        }

        [HttpGet("getall")]
        public ActionResult<List<Machine>> GetAll()
        {
            return Ok(_machineService.FindAll());
        }

        [HttpGet("findbyid")]
        public ActionResult<Machine> FindById(int id)
        {
            return Ok(_machineService.FindById(id));
        }

        [HttpGet("findbyprodparts")]
        public ActionResult<Machine> FindByProdParts(int productedParts)
        {
            return Ok(_machineService.FindByProductedParts(productedParts));
        }

        [HttpPost("create")]
        public ActionResult<Machine> Create(MachineDto request)
        {
            Machine machine = new Machine(request.Id, request.Name, request.ProductedParts, request.Status);
            _machineService.Create(machine);
            return Ok(machine);
        }

        [HttpPut("update")]
        public ActionResult<Machine> Update(Machine request)
        {
            Machine machine = new Machine(request.Id, request.Name, request.ProductedParts, request.Status);
            _machineService.Update(machine);
            return Ok(machine);
        }
    }
}
