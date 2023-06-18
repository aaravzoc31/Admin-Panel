import { Table, Modal } from "antd";
import "./Students.css";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Students = () => {
  const [IsEditing, setIsEditing] = useState(false);
  const [dataSource, setdataSource] = useState([
    {
      roll: 1,
      name: "Aarav Joshi",
      address: "Subidhanagar,Kathmandu",
      contact: 98112536738,
      parent: "Ram",
      status: "excellent",
    },
    {
      roll: 2,
      name: "John Wick",
      address: "Tinkune,Kathmandu",
      contact: 9813456732,
      parent: "Hari",
      status: "excellent",
    },
    {
      roll: 3,
      name: "Pete Davidson",
      address: "Baneshwor,Kathmandu",
      contact: 9848852371,
      parent: "Shyam",
      status: "excellent",
    },
    {
      roll: 4,
      name: "Post Malone",
      address: "Anamnagar,Kathmandu",
      contact: 9823456789,
      parent: "Gopal",
      status: "excellent",
    },
    {
      roll: 5,
      name: "21 Savage",
      address: "Gaushalla,Kathmandu",
      contact: 9817345465,
      parent: "Whoever",
      status: "excellent",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "Roll No.",
      dataIndex: "roll",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "4",
      title: "Contact",
      dataIndex: "contact",
    },
    {
      key: "5",
      title: "Paraent",
      dataIndex: "parent",
    },
    {
      key: "6",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: 7,
      title: "Ations",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      roll: randomNumber,
      name: "name" + randomNumber,
      address: "Address" + randomNumber,
    };
    setdataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you sure,you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setdataSource((pre) => {
          return pre.filter((student) => student.roll != record.roll);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
  };

  return (
    <>
      <div className="student-header">
        <h1>Student</h1>
        <button onClick={onAddStudent} className="add-new-btn">
          Add New +
        </button>
      </div>
      <div className="student-details-table">
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Student"
          visible={IsEditing}
          onCancel={() => {
            setIsEditing(false);
          }}
          onOk={() => {
            setIsEditing(false);
          }}
        />
      </div>
    </>
  );
};
export default Students;
