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
        public IActionResult GetProjects(int pageSize = 10, int pageNum = 1)
        {
            var something = _context.Projects
                .Skip((pageNum - 1) * pageSize)
                .Take(pageSize)
                .ToList();
            
            var totalNumProjects = _context.Projects.Count();
            return Ok(new
            {
                Projects = something,
                TotalNumProjects = totalNumProjects
            });
        }

        [HttpGet("GetProjectTypes")]
        public IActionResult GetProjectTypes()
        {
            var projectTypes = _context.Projects
                .Select(p => p.ProjectType)
                .Distinct()
                .ToList();

            return Ok(projectTypes);
        }
    }
}
