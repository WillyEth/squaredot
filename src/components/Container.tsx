import myImage from "/src/favicon-32x32.png"; // replace with your image path
import verifiedImage from "/src/verified.png"; // path to your verified.png image

export const Container: React.FC = () => {
  return (
    // <div className="spacing-1 absolute bottom-4 right-4 flex cursor-pointer items-center">
    //   <AuditBy />
    //   <PoweredBy />
    // </div>
    <div className="flex     cursor-pointer items-center justify-center   lg:absolute lg:bottom-4 lg:right-4 lg:justify-start xl:absolute xl:bottom-4 xl:right-4 xl:justify-start">
      <AuditBy />
      <PoweredBy />
    </div>
  );
};

export const PoweredBy: React.FC = () => {
  return (
    <div
      onClick={() => {
        window.open("https://nftbutterflylab.com?utm_source=embed", "_blank");
      }}
      className="flex cursor-pointer items-center"
    >
      <span className="px-2 text-xl text-white">Powered by</span>
      <img src={myImage} alt="My Logo" width="32" height="32" />
    </div>
  );
};

export const AuditBy: React.FC = () => {
  return (
    <div
      onClick={() => {
        window.open(
          "https://ipfs-2.thirdwebcdn.com/ipfs/QmNgNaLwzgMxcx9r6qDvJmTFam6xxUxX7Vp8E99oRt7i74/?utm_source=embed",
          "_blank",
        );
      }}
      className="flex cursor-pointer items-center"
    >
      <span className="px-2 text-xl text-white">Audit</span>
      <img src={verifiedImage} alt="Verified" width="32" height="32" />{" "}
      {/* Adjust width and height to your needs */}
    </div>
  );
};
