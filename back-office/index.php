<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Back-Office - Analytics</title>
</head>
<body>
    <h1>Tableau de Bord Analytics</h1>
    <div id="analytics-data">
        <p>Chargement des données...</p>
    </div>
    <script>
        // Fetch analytics data
        fetch('/api/analytics')
            .then(response => response.json())
            .then(data => {
                const analyticsDiv = document.getElementById('analytics-data');
                analyticsDiv.innerHTML = `
                    <p>Visiteurs: ${data.visitors}</p>
                    <p>Taux de rebond: ${data.bounceRate}</p>
                    <p>Pages les plus visitées: ${data.topPages.join(', ')}</p>
                `;
            });
    </script>
</body>
</html>