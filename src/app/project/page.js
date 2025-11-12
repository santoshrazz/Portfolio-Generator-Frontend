import { headers } from "next/headers";

const page = async () => {
  const headersList = await headers();
  const host = headersList.get("host");
  console.log("host is ", host);
  return <div>This is project page of host : {host}</div>;
};

export default page;
