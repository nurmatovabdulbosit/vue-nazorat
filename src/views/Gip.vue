<template>
         <main>
                        <div class="card-header">
                            <h3>Davlat investitsiya dasturi (GIP)</h3>
                            <button>Yirik loyihalar </button>
                            <button>O'rta loyihalar </button>
                            <button>Kichik loyihalar </button>
                        </div>
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
                        <span>Ishga tushgani</span>
                    </div>
                    <div>
                        <span class="material-icons">wallet</span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h1>540 000</h1>
                        <span>Ishga tushmagani</span>
                    </div>
                    <div>
                        <span class="material-icons">attach_money</span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h1>540 000</h1>
                        <span>Ish o'rinlari</span>
                    </div>
                    <div>
                        <span class="material-icons">attach_money</span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h1>540 000</h1>
                        <span>Yaratilgan ish o'rni</span>
                    </div>
                    <div>
                        <span class="material-icons">attach_money</span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h1>540 000</h1>
                        <span>Dalolatnomalari</span>
                    </div>
                    <div>
                        <span class="material-icons">attach_money</span>
                    </div>
                </div>
                <div class="card-single">
                    <div>
                        <h1>540 000</h1>
                        <span>Muddati tgani</span>
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
               
        </div>
            
    </main>
</template>
<script>

</script>
<style scoped>
.card-single:hover {
    background: var(--card-color);
    cursor: pointer;
}
.recent-grid {
    grid-template-columns:auto;
}
.card-header button {
    background: #46C263;
    border-radius: 10px;
    color: #f0f0f0;
    font-size: .8rem;
    padding: .5rem 1rem;
    border: 0;
    
}
.card-header:hover button {
    background: #009723;
    
    cursor: pointer;
}
</style>