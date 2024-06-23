type Props = {};
const BlackholeVideo = (props: Props) => {
  return (
    <div className="w-full h-[1000px] flex flex-col opacity-0 dark:opacity-100 absolute top-0">
      <div className="h-full w-full relative">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-450px] w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
export default BlackholeVideo;
