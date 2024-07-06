<template>

        <main>
            <div class="cards">
                <div class="card-single">
                    <div>
                        <h1>4 895</h1>
                        <span>Horijiy loyihalar soni</span>
                    </div>
                    <div>
                        <span class="material-icons">language</span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h1>$450</h1>
                        <span>Qiymati</span>
                    </div>
                    <div>
                        <span class="material-icons">attach_money</span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h1>1 250</h1>
                        <span>Hududiy loyihalar soni</span>
                    </div>
                    <div>
                        <span class="material-icons">wallet</span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h1>540 000</h1>
                        <span>Qiymati</span>
                    </div>
                    <div>
                        <span class="material-icons">attach_money</span>
                    </div>
                </div>
            </div>
            <div class="recent-grid">
                <div class="projects">
                    <div class="card">
                        <div class="card-header">
                            <h3>Ohirgi kiritilgan loyihalar</h3>
                            <button>Export <span class="material"></span></button>
                        </div>
                    <div class="card-body">
                       <div class="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td>T/R</td>
                                    <td>Nomi</td>
									<td>Kiritilgan sanasi</td>
									<td>Yo'nalishi</td>
                                    <td>Tuman</td>
									<td>Ishga tushish sanasi</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Huyndai OOO</td>
									<td>07.07.2024</td>
									<td> <span class="status purple">Sanoat</span></td>
									<td>Uchqo'rg'on</td>
									<td>07.01.2025</td>
                                </tr>
                                <tr>
									<td>3</td>
                                    <td>Huyndai OOO</td>
									<td>07.07.2024</td>
									<td> <span class="status purple">Sanoat</span></td>
									<td>Uchqo'rg'on</td>
									<td>07.01.2025</td>
									
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Huyndai OOO</td>
									<td>07.07.2024</td>
									<td> <span class="status purple">Sanoat</span></td>
									<td>Uchqo'rg'on</td>
									<td>07.01.2025</td>
                                </tr>
                                
                            </tbody>
                        </table>
                       </div>
                    </div>
                </div>
            </div>
                <div class="customers">
                    <div class="card">
                       <div class="card-header">
                            <h3>Uchrashuvlar</h3>
                            <button>Export <span class="material"></span></button>
                       </div>
                    
                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                    <img src="../assets/customer01.jpg" width="40px" 
                                    height="40px">
                                    <div>
                                        <h4>Hitakio company</h4>
                                        <small>KOREA</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="material-icons">person</span>
                                    <span class="material-icons">comment</span>
                                    <span class="material-icons">phone</span>
                                </div>
                            </div>
                            <div class="customer">
                                <div class="info">
                                    <img src="../assets/customer01.jpg" width="40px" 
                                    height="40px">
                                    <div>
                                        <h4>Kim Xon Song</h4>
                                        <small>JAPAN</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="material-icons">person</span>
                                    <span class="material-icons">comment</span>
                                    <span class="material-icons">phone</span>
                                </div>
                            </div>
                            <div class="customer">
                                <div class="info">
                                    <img src="../assets/customer01.jpg" width="40px" 
                                    height="40px">
                                    <div>
                                        <h4>Xitaraco coperation</h4>
                                        <small>BBA</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="material-icons">person</span>
                                    <span class="material-icons">comment</span>
                                    <span class="material-icons">phone</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
</template>
<script>


</script>

<style spoced>

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
td{
  padding: 15px;
  font-size: 14px;
  color: #333;
}

tr:nth-child(even){
  background: #fff;
}
tfoot{
  background: rgba(113, 99, 186, 255);
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
.card-single:last-child h1{
    color: #333;
}


</style>
