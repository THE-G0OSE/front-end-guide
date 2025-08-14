import { eiditingCourseSelection } from "@/widgets/coure-constructor/model";
import { useAppSelector } from "@hooks";
import CreateCourseMenu from "./components/createCourseMenu/ui/CreateCourseMenu";
import ManageCourseMenu from "./components/manageCourseMenu/ui/ManageCourseMenu";

const Main = () => {
  const { isCreating, editingCourse } = useAppSelector(eiditingCourseSelection);

  return (
    <div className="w-full h-full overflow-x-hidden">
      {isCreating ? (
        <CreateCourseMenu />
      ) : (
        editingCourse && <ManageCourseMenu />
      )}
    </div>
  );
};

export default Main;
