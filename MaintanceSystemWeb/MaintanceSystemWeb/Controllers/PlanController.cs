using MaintanceSystemWeb.DTO;
using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Service.Core;
using Microsoft.AspNetCore.Mvc;

namespace MaintanceSystemWeb.Controllers
{
    [Route("api/plan")]
    [ApiController]
    public class PlanController : ControllerBase
    {
        private readonly IPlanService _planService;
        public PlanController(IPlanService planService)
        {
            _planService = planService;
        }

        
         [HttpPost("create")]
        public ActionResult<Plan> Create(PlanDto request)
        {
            Plan plan = new Plan(request.Id, request.MachineId, request.MachineName, request.MaxProd, request.MaxDate,
                request.EquipmentAmount, request.Parts, request.ServiceBookId, request.Version);
            _planService.Create(plan);
            return Ok(plan);
        }
         
    }
}
