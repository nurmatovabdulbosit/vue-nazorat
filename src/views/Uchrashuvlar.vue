<template>
	<main id="about-page">
		<div class="detailsuz">
				<div class="recentOrders">
					<div class="cardHeader">
						<h2>Eng ohirgi ishga tushgan loyihalar</h2>
						<a href="#" class="btn">Export (.xlsx)</a>
					</div>

					<table>
						<thead>
							<tr>
								<td>Rasmi</td>
								<td>Ismi</td>
								<td>Kompaniyasi</td>
								<td>Sanasi</td>
								<td>Davlat</td>
								<td>Holati</td>
							</tr>
						</thead>
                        
                       
						<tbody>
							<tr>
                                <td width="60px"><div class="imgBx"><img src="../assets/customer02.jpg" alt=""></div>              </td>
								<td>Star Refrigerator</td>
								<td>Huyndai OOO</td>
								<td>01.07.2024</td>
                                <td>Xitoy</td>
								<td><span class="status delivered">Delivered</span></td>
							</tr>

							<tr>
                                <td width="60px"><div class="imgBx"><img src="../assets/customer02.jpg" alt=""></div>              </td>
								<td>Star Refrigerator</td>
								<td>Huyndai OOO</td>
								<td>01.07.2024</td>
                                <td>Xitoy</td>
								<td><span class="status delivered">Delivered</span></td>
							</tr>
                            <tr>
                                <td width="60px"><div class="imgBx"><img src="../assets/customer02.jpg" alt=""></div>              </td>
								<td>Star Refrigerator</td>
								<td>Huyndai OOO</td>
								<td>01.07.2024</td>
                                <td>Xitoy</td>
								<td><span class="status delivered">Delivered</span></td>
							</tr>
                            <tr>
                                <td width="60px"><div class="imgBx"><img src="../assets/customer02.jpg" alt=""></div>              </td>
								<td>Star Refrigerator</td>
								<td>Huyndai OOO</td>
								<td>01.07.2024</td>
                                <td>Xitoy</td>
								<td><span class="status delivered">Delivered</span></td>
							</tr>
                            <tr>
                                <td width="60px">
                                    <div class="imgBx">
                                        <img src="../assets/customer02.jpg" alt="">
                                    </div>
                                </td>
								<td>Star Refrigerator</td>
								<td>Huyndai OOO</td>
								<td>01.07.2024</td>
                                <td>Xitoy</td>
								<td><span class="status delivered">Delivered</span></td>
							</tr>
						</tbody>
					</table>
				</div>

				<!-- ================= New Customers ================ -->
			
		</div>
	</main>
</template>
<script>
</script>
<style scoped>
table tr td {
    padding: 12px 10px;
}
.imgBx {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
}
.imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
.detailsuz {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  
  grid-gap: 30px;
 
}

.detailsuz .recentOrders {
  position: relative;
  display: grid;
  min-height: 500px;
  background: var(--white);
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

.detailsuz .cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.cardHeader h2 {
  font-weight: 600;
  color: var(--blue);
}
.cardHeader .btn {
  position: relative;
  padding: 5px 10px;
  background: var(--primary);
  text-decoration: none;
  color: var(--white);
  border-radius: 6px;
}

.detailsuz table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
.detailsuz table thead td {
  font-weight: 600;
}
.detailsuz .recentOrders table tr {
  color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.detailsuz .recentOrders table tr:last-child {
  border-bottom: none;
}
.detailsuz .recentOrders table tbody tr:hover {
  background: var(--dark);
  color: var(--white);
}
.detailsuz .recentOrders table tr td {
  padding: 10px;
}
.detailsuz .recentOrders table tr td:last-child {
  text-align: center;
}
.detailsuz .recentOrders table tr td:nth-child(2) {
  text-align: center;
}
.detailsuz .recentOrders table tr td:nth-child(3) {
  text-align: center;
}
table{
  width: 100%;
  border-collapse: collapse;
}
thead{
  background: rgba(113, 99, 186, 255);
  color: #fff;
}
th {
  padding: 15px;
  text-align: left;
}
tbody{
  background: #f2f2f2;
}
table td tr{
  padding: 15px;
  font-size: 14px;
  color: #ffffff;
}

tr:nth-child(even){
  background: #fff;
}
tfoot{
  background: var(--text-grey);
  font-weight: bold;
  color: #fff;
}
tfoot td {
  padding: 15px;
}
.table-container button{
  color: green;
  background: none;
  cursor: pointer;
}

</style>