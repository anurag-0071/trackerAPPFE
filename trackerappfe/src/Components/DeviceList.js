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
      fontWeight: "bolder"
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

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell key={"title"} align={"left"}>
                {"Devices"}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          {devices ? devices.map(d => {
            return (
              <TableBody>
                <StyledTableCell>
                  {d.id}
                </StyledTableCell>
              </TableBody>
            )
          }) : null}
        </Table>
      </TableContainer>
    </div>
  )

}

export default DeviceList;