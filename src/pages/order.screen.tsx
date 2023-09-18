"use client";
import React, { useEffect, useState } from "react";
import { faCreditCard, faTruck, faMoneyCheckDollar, faComments, faEye } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderScreen = () => {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }


	return (
		<div id="page-content" className="container pt-5">
      <Modal show={isShow} className="w-100">
        <Modal.Header closeButton onClick={initModal}>
          <p className="h1 fw-bold pt-2 ">Chi tiết đơn hàng</p>
        </Modal.Header>
        <Modal.Body>
          <div className="information mb-4">
            <p className="mb-1"><b className="w-25 d-inline-block">Họ và tên:</b> Nguyen Xuan Thao</p>
            <p className="mb-1"><b className="w-25 d-inline-block">Mã đơn hàng:</b> <label className="bg-primary-subtle text-primary rounded p-1 px-2">#DH001</label></p>
            <p className="mb-1"><b className="w-25 d-inline-block">Ghi chú:</b> Đặt hàng online</p>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="py-3 fw-bold">ID Sản phẩm</th>
                <th scope="col" className="py-3 fw-bold">Số lượng</th>
                <th scope="col" className="py-3 fw-bold">Giá tiền</th>
                <th scope="col" className="py-3 fw-bold">Trạng thái</th>
                <th scope="col" className="py-3 fw-bold">Tổng giá tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-middle">
                <td className="py-4">1</td>
                <td className="py-4 ">12</td>
                <td className="py-4"><label className="bg-body-secondary text-dark-subtle rounded p-2">$ 200</label></td>
                <td className="py-4"><label className="bg-success-subtle text-success rounded p-2">Active</label></td>
                <td className="py-4"><label className="bg-body-secondary text-dark-subtle rounded p-2">$ 200</label></td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="information mb-4">
        <p className="mb-1"><b>Họ và tên:</b> Nguyen Xuan Thao</p>
        <p className="mb-1"><b>Mã đơn hàng:</b> #DH001</p>
      </div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col" className="py-3 fw-bold">ID đơn hàng</th>
						<th scope="col" className="py-3 fw-bold">Mã đơn hàng</th>
						<th scope="col" className="py-3 fw-bold">Trạng thái</th>
						<th scope="col" className="py-3 fw-bold">Ngày đặt hàng</th>
						<th scope="col" className="py-3 fw-bold text-center">Xem chi tiết</th>
					</tr>
				</thead>
				<tbody>
					<tr className="align-middle">
            <td className="py-4">1</td>
						<td className="py-4"><label className="bg-body-secondary text-dark-subtle rounded p-2">#DH001</label></td>
						<td className="py-4"><label className="bg-warning-subtle text-warning rounded p-2">Chờ xác nhận</label></td>
						<td className="py-4">18-12-2022</td>
						<td className="py-4 text-center"><button type="button" className="bg-white rounded py-1" onClick={initModal}><FontAwesomeIcon icon={faEye}/></button></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default OrderScreen;
