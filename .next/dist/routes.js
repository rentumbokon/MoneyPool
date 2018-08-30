'use strict';

var routes = require('next-routes')();

routes.add('/moneypools/new', '/moneypools/new').add('/moneypools/:address', '/moneypools/show').add('/moneypools/:address/requests', '/moneypools/requests/index').add('/moneypools/:address/requests/new', '/moneypools/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNFLEFBREYsSUFDTSxBQUROLG1CQUN5QixBQUR6QixtQkFFRSxBQUZGLElBRU0sQUFGTix3QkFFOEIsQUFGOUIsb0JBR0UsQUFIRixJQUdNLEFBSE4saUNBR3VDLEFBSHZDLDhCQUlFLEFBSkYsSUFJTSxBQUpOLHFDQUkyQyxBQUozQzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1JlbmFyZC9Ecm9wYm94L1Byb2dyYW1taW5nL01vbmV5UG9vbCJ9