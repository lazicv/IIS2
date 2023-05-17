using MaintanceSystemWeb.DTO;
using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Service;
using MaintanceSystemWeb.Service.Core;
using Microsoft.AspNetCore.Mvc;

namespace MaintanceSystemWeb.Controllers
{
    [Route("api/equipment")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IEquipmentService _equipmentService;

        public EquipmentController(IConfiguration configuration, IEquipmentService equipmentService)
        {
            _configuration = configuration;
            _equipmentService = equipmentService;
        }

        [HttpGet("findbyamount")]
        public ActionResult<Equipment> FindByAmount(int amount)
        {
            return Ok(_equipmentService.FindByAmount(amount));
        }

        [HttpPost("create")]
        public ActionResult<Equipment> Create(EquipmentCreateDto request)
        {
            Equipment equipment = new Equipment(request.Id, request.Name, request.Amount);
            _equipmentService.Create(equipment);
            return Ok(equipment);
        }

        [HttpPut("update")]
        public ActionResult<Equipment> Update(Equipment request)
        {
            Equipment equipment = new Equipment(request.Id, request.Name, request.Amount);
            _equipmentService.Update(equipment);
            return Ok(equipment);
        }
    }
}
