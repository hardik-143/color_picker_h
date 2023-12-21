import React, { useState } from "react";
import ModalLayout from "./ModalLayout";
import { useGlobalContext } from "../context";
import { Listbox } from "@headlessui/react";
import * as htmlToImage from "html-to-image";
const DownloadPaletteModal = () => {
  const { showDownloadPaletteModal, setShowDownloadPaletteModal, setMessage } =
    useGlobalContext();
  const extensions = ["png", "jpg", "jpeg"];
  const [selected, setSelected] = useState(extensions[0]);
  const downloadPalette = () => {
    var node = document.getElementById("colorPalette");
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        // download image
        img.src = dataUrl;
        var link = document.createElement("a");
        link.download = "palette.png";
        link.href = dataUrl;
        link.click();
        setMessage(`palette downloaded`);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <ModalLayout
      title="Download Palette Image"
      show={showDownloadPaletteModal}
      setShow={setShowDownloadPaletteModal}
      okButton={
        <>
          <button onClick={() => downloadPalette()}>Download</button>
        </>
      }
    >
      <p>color copied</p>
      <div>
        <Listbox value={selected} onChange={setSelected}>
          <Listbox.Button className="block truncate">{selected}</Listbox.Button>
          <Listbox.Options>
            {extensions.map((ext, index) => (
              <Listbox.Option key={index} value={ext}>
                {ext}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </ModalLayout>
  );
};

export default DownloadPaletteModal;
