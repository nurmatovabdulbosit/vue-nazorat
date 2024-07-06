<template>
	<main id="muammo-page">
		<div class="detailsuz">
				<div class="recentOrders">
					<div class="cardHeader">
						<h2>Muammoli loyihalar</h2>
						<a href="#" class="btn">Export (.xlsx)</a>
						
					</div>

					<table>
						<thead>
							<tr>
								<td>Nomi</td>
								<td>Summasi</td>
								<td>Amalda</td>
								<td>Muammosi</td>
								<td>Holati</td>
								
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td><p class="status return">Bank kreti bilan muammosi bor 2 yildan buyon kredit</p></td>
								<td><span class="status delivered">Hal etilgan</span></td>
							</tr>

							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td> <p class="status return">Bank krediti</p></td>
								<td><span class="status return">Hal etilmagan</span></td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td><p class="status return">Bank kreti bilan muammosi bor 2 yildan buyon kredit</p></td>
								<td><span class="status delivered">Hal etilgan</span></td>
							</tr>

							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td><p class="status return">Bank kreti bilan muammosi bor 2 yildan buyon kredit</p></td>
								<td><span class="status return">Hal etilmagan</span></td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td><p class="status return">Bank kreti bilan muammosi bor 2 yildan buyon kredit</p></td>
								<td><span class="status return">Hal etilmagan</span></td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td><p class="status return">Bank kreti bilan muammosi bor 2 yildan buyon kredit</p></td>
								<td><span class="status return">Hal etilmagan</span></td>
							</tr>
							<tr>
								<td>Star Refrigerator</td>
								<td>$1200</td>
								<td>Paid</td>
								<td><p class="status return">Bank kreti bilan muammosi bor 2 yildan buyon kredit</p></td>
								<td><span class="status return">Hal etilmagan</span></td>
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
  color: var(--black1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.detailsuz .recentOrders table tr:last-child {
  border-bottom: none;
}
.detailsuz .recentOrders table tbody tr:hover {
  background: var(--blue);
  color: var(--white);
}
.detailsuz .recentOrders table tr td {
  padding: 10px;
}
.detailsuz .recentOrders table tr td:last-child {
  text-align: end;
}
.detailsuz .recentOrders table tr td:nth-child(2) {
  text-align: end;
}
.detailsuz .recentOrders table tr td:nth-child(3) {
  text-align: center;
}
</style>