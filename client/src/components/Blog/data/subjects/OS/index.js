// OS subject - lazy loading for better performance
import { createLazyTopic } from "../contentParser";
import processManagement from "./process-management";
import memoryManagement from "./memory-management";
import fileSystems from "./file-systems";

const OS = {
  id: "os",
  name: "OS",
  topics: [
    // intro-to-os still has old page files, needs .content.js conversion
    // Once converted, uncomment this:
    // createLazyTopic(
    //   "intro-to-os",
    //   "Introduction to OS",
    //   () => import("./intro-to-os/intro-to-os.content")
    // ),
    processManagement,
    memoryManagement,
    fileSystems,
  ],
};

export default OS;
