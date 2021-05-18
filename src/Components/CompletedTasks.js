import React from "react";
import { Table } from "react-bootstrap";

function CompletedTasks(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ backgroundColor: "#a8ffab" }}>Completed Tasks</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map(
            (item) =>
              item.completed && (
                <tr key={item.id}>
                  <td>{item.task}</td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </>
  );
}

export default CompletedTasks;
