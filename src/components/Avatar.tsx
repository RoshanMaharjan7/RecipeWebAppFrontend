import { cn } from "../lib/utils.ts"

export const AvatarImage = ({
  imgURL = "",
  name,
}: {
  imgURL: string;
  name: string;
}) => {
  return imgURL === "" ? (
    <span className="flex justify-center font-bold bg-orange-100 py-1 px-3 rounded-full">
      {name.substring(0, 1)}
    </span>
  ) : (
    <img src={imgURL} className="w-9 rounded-full" />
  );
};

const Avatar = ({className}:any) => {
  return (
    <div className={cn("flex items-center gap-2 ",className)}>
      <AvatarImage imgURL="https://github.com/shadcn.png" name="Roshan" />{" "}
      <p className="font-semibold">Roshan</p>
    </div>
  );
};

export default Avatar;
