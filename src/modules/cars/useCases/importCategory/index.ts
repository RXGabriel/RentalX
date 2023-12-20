import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository"
import { ImportCategoryController } from "./ImportCategoryController"
import { ImportCategoryUseCase} from "./ImportcategoryUseCase"

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export{importCategoryController}