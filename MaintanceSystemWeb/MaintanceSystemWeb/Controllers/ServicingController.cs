using MaintanceSystemWeb.DTO;
using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Service.Core;
using Microsoft.AspNetCore.Mvc;

namespace MaintanceSystemWeb.Controllers
{
    [Route("api/servicing")]
    [ApiController]
    public class ServicingController : ControllerBase
    {
        private readonly IServicingService _servicingService;
        public ServicingController(IServicingService servicingService)
        {
            _servicingService = servicingService;
        }

        
         [HttpGet("getall")]
        public ActionResult<List<Servicing>> GetAll()
        {
            return Ok(_servicingService.GetAll());
        }

        [HttpGet("findbyid")]
        public ActionResult<Servicing> FindById(int id)
        {
            return Ok(_servicingService.Get(id));
        }


        [HttpPost("create")]
        public ActionResult<Servicing> Create(ServicingDto request)
        {
            Servicing servicing = new Servicing(request.Id, request.ServiceBookId, request.ServicingDateTime, request.ServicingType,
                request.EquipmentAmount, request.Description);
            _servicingService.Create(servicing);
            return Ok(servicing);
        }
         
    }
}
