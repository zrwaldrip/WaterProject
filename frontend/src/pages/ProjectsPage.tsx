import { useState } from "react";
import CategoryFilter from "../componenets/CategoryFilter";
import ProjectList from "../componenets/ProjectList";
import WelcomBand from "../componenets/WelcomBand";
import CartSummary from "../componenets/CartSummary";

function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="container">
        <CartSummary />
        <WelcomBand />
      <div className="row">
        <div className="col-md-3">
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="col-md-9">
          <ProjectList selectedCategories={selectedCategories} />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
