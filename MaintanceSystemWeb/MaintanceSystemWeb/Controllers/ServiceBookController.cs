using MaintanceSystemWeb.DTO;
using MaintanceSystemWeb.Models;
using MaintanceSystemWeb.Service;
using MaintanceSystemWeb.Service.Core;
using Microsoft.AspNetCore.Mvc;

namespace MaintanceSystemWeb.Controllers
{
    [Route("api/servicebook")]
    [ApiController]
    public class ServiceBookController : ControllerBase
    {
        private readonly IServiceBookService _serviceBookService;
        public ServiceBookController(IServiceBookService serviceBookService)
        {
            _serviceBookService = serviceBookService;
        }

         [HttpPost("create")]
        public ActionResult<ServiceBook> Create(ServiceBookDto request)
        {
            /*ServiceBook serviceBook = new ServiceBook(request.Id, request.MachineId);
            _serviceBookService.Create(serviceBook);
            return Ok(serviceBook);*/
            return Ok("dada");
        }

        
         [HttpGet("getall")]
        public ActionResult<List<ServiceBook>> GetAll()
        {
            return Ok(_serviceBookService.GetAll());
        }

        [HttpGet("getbyid")]
        public ActionResult<ServiceBook> GetById(int id)
        {
            return Ok(_serviceBookService.GetById(id));
        }
         
    }
}
