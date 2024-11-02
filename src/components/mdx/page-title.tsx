import { Separator } from "../ui/separator";

const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="-mx-3 -mt-3 md:m-0">
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-800 p-6 pb-2 md:bg-none md:p-0">
      {children}
    </div>
    <Separator />
  </div>
);

export default PageTitle;
