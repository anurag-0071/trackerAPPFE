import React from "react";

import { TableContainer, Table, TableHead, TableRow, withStyles, TableCell, TableBody } from "@material-ui/core";

const thowIfUnavailable = (param) => {
  throw new Error(`Missing props: ${param}`)
}

function DeviceList({
  devices = thowIfUnavailable("devices")
}) {

  console.log("Devices", typeof devices);

  // const devices = [
  //   { name: "Device1" },
  //   { name: "Device2" },
  //   { name: "Device3" },
  //   { name: "Device4" },
  //   { name: "Device5" },
  //   { name: "Device6" },
  // ]

  const StyledTableCell = withStyles((theme) => ({
    head: {
      // backgroundColor: theme.palette.common.black,
      // color: theme.palette.common.white,
      fontSize: 20,
      fontWeight: "bolder",
      backgroundColor: "red"
    },
    body: {
      fontSize: 14,
      // color: theme.palette.common.white,
      // backgroundColor: "#282c34",
      // borderColor: "red",
      // border: 1,
      m: 1,
    },
  }))(TableCell);

  const handleClick = () => {
    alert('clicked')
  }

  return (
    <div style={{ alignSelf: "flex-end" }}>
      <TableContainer style={{ width: "50vw", height: "100vh" }}>
        <Table
        // style={{ padding: "1em" }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell key={"title"} align={"left"}>
                {"Devices"}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices ? devices.map(d => {
              return (
                <TableRow key={d.id}>
                  <StyledTableCell onClick={handleClick}>
                    {d.id}
                  </StyledTableCell>
                </TableRow>
              )
            }) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )

}

export default DeviceList;