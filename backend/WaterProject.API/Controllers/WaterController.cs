using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.SolutionPersistence.Model;
using WaterProject.API.Data;

namespace WaterProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WaterController : ControllerBase
    {
        private WaterDbContext _context;
        
        public WaterController(WaterDbContext temp) => _context = temp;

        [HttpGet("AllProjects")]
        public IEnumerable<Project> GetProjects()
        {
            return _context.Projects.ToList();
        }

        [HttpGet("FunctionalProjects")]
        public IEnumerable<Project> GetFunctionalProjects()
        {
            var something = _context.Projects.Where(p => p.ProjectFunctionalityStatus == "Functional").ToList();
            return something;
        }
    }
}
