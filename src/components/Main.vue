<template>
    <div class="main-content">
        <header>
                <h2>
                    <label for="nav-toggle">
                        <span class="material-icons">menu</span>
                    </label>
                    <muqova class="muqova">Bosh sahifa</muqova>
                </h2>
            
                <div class="search-wrapper">
                    <span class="material-icons">search</span>
                    <input type="search" placeholder="Qidiruv"/>
                </div>

                <div class="user-wrapper">
                    <img src="../assets/customer02.jpg" width="40px" height="40px" alt="">
                    <div>
                        <h4>Abdulbosit</h4>
                        <small>Super admin</small>
                    </div>
                </div>    
        </header>
        <router-view />
        
    </div>    
       
        
   <!-- Content -->
		
	


</template>
<script >

</script>
<style scoped>


</style>