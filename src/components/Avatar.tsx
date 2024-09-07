import { cn } from "../lib/utils.ts"



const Avatar = ({className, username}:{className?: string, username:string}) => {
  return (
    <div className={cn("flex items-center gap-2 ",className)}>
      <img src={`https://avatar.iran.liara.run/username?username=${username}`} alt={username} className="w-[40px]" />{" "}
      <p className="font-semibold">{username}</p>
    </div>
  );
};

export default Avatar;
