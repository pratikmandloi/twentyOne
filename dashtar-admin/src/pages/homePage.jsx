import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Select,
  Input,
  Button,
  Card,
  CardBody,
  Pagination,
  Avatar,
  Badge,
  TableBody,
  Tooltip,
  TableRow,
} from "@windmill/react-ui";
import { useTranslation } from "react-i18next";
import { FiPlus, FiUploadCloud } from "react-icons/fi";
import { FiEdit, FiTrash2 } from "react-icons/fi";

//internal import

import useAsync from "@/hooks/useAsync";
import useToggleDrawer from "@/hooks/useToggleDrawer";
import UploadManyTwo from "@/components/common/UploadManyTwo";
import NotFound from "@/components/table/NotFound";
import ProductServices from "@/services/ProductServices";
import PageTitle from "@/components/Typography/PageTitle";
import { SidebarContext } from "@/context/SidebarContext";
import ProductTable from "@/components/product/ProductTable";
import SelectCategory from "@/components/form/SelectCategory";
import MainDrawer from "@/components/drawer/MainDrawer";
import ProductDrawer from "@/components/drawer/ProductDrawer";
import CheckBox from "@/components/form/CheckBox";
import useProductFilter from "@/hooks/useProductFilter";
import DeleteModal from "@/components/modal/DeleteModal";
import BulkActionDrawer from "@/components/drawer/BulkActionDrawer";
import TableLoading from "@/components/preloader/TableLoading";
import SettingServices from "@/services/SettingServices";
import { useDropzone } from "react-dropzone";
import HomePageService from "@/services/homePageservice";
import ShowHideButton from "@/components/table/ShowHideButton";
import EditDeleteButton from "@/components/table/EditDeleteButton";
import { notifySuccess } from "@/utils/toast";

// const baseUrl = import.meta.process.env.VITE_APP_API_BASE_URL;

const HomePage = () => {
  const { title, allId, serviceId, handleDeleteMany, handleUpdateMany } =
    useToggleDrawer();

  const { t } = useTranslation();
  const {
    toggleDrawer,
    lang,
    currentPage,
    handleChangePage,
    searchText,
    category,
    setCategory,
    searchRef,
    handleSubmitForAll,
    sortedField,
    setSortedField,
    limitData,
  } = useContext(SidebarContext);

  const { data, loading, error } = useAsync(() =>
    ProductServices.getAllProducts({
      page: currentPage,
      limit: limitData,
      category: category,
      title: searchText,
      price: sortedField,
    })
  );

  const { data: globalSetting } = useAsync(SettingServices.getGlobalSetting);
  const currency = globalSetting?.default_currency || "$";
  // console.log("product page", data);

  // react hooks
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [files, setFiles] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [imgAtri, setImgAtr] = useState(false);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data?.products.map((li) => li._id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    multiple: true,
    maxSize: 5000000,
    maxFiles: 20,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const handleAddimg = async () => {
    try {
      if (fileRejections) {
        fileRejections.map(({ file, errors }) => {
          if (errors) {
            setFileErr(errors);
          }
        });
      }

      if (files.length >= 0) {
        files.forEach((data, i) => {
          const formData = new FormData();
          formData.append(`file`, data);
          return HomePageService.addHomePageImage(formData)
            .then((res) => {
              if (res.ok === true) {
                setFiles([]);
                setImgAtr(res.ok);
              } else {
                throw new Error(`Failed to add image: ${res.ok} - ${res.ok}`);
              }
            })
            .then((res) => {
              return res;
            })
            .catch((err) => {
              throw err;
            });
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    try {
      setImgAtr(false);
      HomePageService.getHomePageImage()
        .then((res) => {
          if (res.ok === true) {
            setImgUrl(res);
          }
        })
        .catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
  });
  const handleDeleteBtn = (id) => {
    try {
      HomePageService.deleteHomePage({ id: id }).then((res) =>
        console.log(res)
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <PageTitle>{t("Home Page")}</PageTitle>
      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody className="">
          <form
            onSubmit={handleSubmitForAll}
            className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6  xl:flex"
          >
            <div className="flex justify-start xl:w-1/2  md:w-full">
              <div className="w-full text-center">
                <div
                  {...getRootProps()}
                  className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                >
                  <input {...getInputProps()} name="File" />
                  <span className="mx-auto flex justify-center">
                    <FiUploadCloud className="text-3xl text-green-500" />
                  </span>
                  {files.length >= 0 &&
                    files.map((data) => (
                      <>
                        <span className="text-sm mt-2 text-gray-400 m-1">
                          {data.name}
                        </span>
                      </>
                    ))}

                  {/* <em className="text-xs text-gray-400">imageFormat</em> */}
                </div>
                {imgAtri === true ? (
                  notifySuccess("Image Upload Successfull")
                ) : (
                  <div className="text-green-500">
                    Please Drag and Drop or Select Image
                  </div>
                )}
              </div>
            </div>
            <div className="lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0">
              <div className="w-full md:w-32 lg:w-32 xl:w-32 mr-3 mb-3 lg:mb-0"></div>
              <div className="w-full md:w-48 lg:w-48 xl:w-48">
                <Button
                  onClick={() => handleAddimg()}
                  className="w-full rounded-md h-12"
                >
                  <span className="mr-2">
                    <FiPlus />
                  </span>
                  {t("Add Image")}
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
      {loading ? (
        <TableLoading row={12} col={7} width={160} height={20} />
      ) : error ? (
        <span className="text-center mx-auto text-red-500">{error}</span>
      ) : (
        <TableContainer className="mb-8 rounded-b-lg">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{t("One switch allowed at a time")}</TableCell>
                <TableCell className="text-center">
                  {t("PublishedTbl")}
                </TableCell>
                <TableCell className="text-right">{t("ActionsTbl")}</TableCell>
              </tr>
            </TableHeader>
            {imgUrl.ok === true &&
              imgUrl.Data.length >= 0 &&
              imgUrl.Data.map((data, i) => (
                <TableBody>
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center">
                        <img
                          src={`${
                            import.meta.env.VITE_APP_API_BASE_URL
                          }/static/${data.image.originalname}`}
                          alt="home page img"
                          style={{ width: "30%" }}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <ShowHideButton
                        curretData={i}
                        id={data._id}
                        status={data.image.status}
                        isVisable={data.image.isVisable}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-end text-right">
                        <button
                          onClick={() => handleDeleteBtn(data._id)}
                          className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none"
                        >
                          Delete
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
          <TableFooter>
            <Pagination
              totalResults={imgUrl.length >= 0 && imgUrl.length}
              resultsPerPage={limitData}
              onChange={handleChangePage}
              label="Product Page Navigation"
            />
          </TableFooter>
        </TableContainer>
      )}
    </>
  );
};

export default HomePage;
